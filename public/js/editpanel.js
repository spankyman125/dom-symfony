var isEditing = false;
var panelCreated = false;

var buttons = new Map([
	['Выровнять слева','justifyLeft'],
	['Выровнять справа','justifyRight'],
	['Выровнять по центру','justifyCenter'],
	['Выровнять по ширине','justifyFull'],
	['Подчеркивание','underline'],
	['Нумерованный список','insertorderedlist'],
	['Пунктирный список','insertunorderedlist'],
	['Удалить отступ','outdent'],
	['Добавить отступ','indent']
]);

var textTypes = new Map([
	['Название','h1'],
	['Заголовок 1','h2'],
	['Заголовок 2','h3'],
	['Код','pre'],
	['Параграф','p'],
]);

var fontNames = ["Times New Roman","Arial","Tahoma"];


function createButton(text,param) {
    return $('<button/>', {
        id:text,
        text: text,
        click: function()
        {
        	document.execCommand(param, false, '');	
        }
    });
}

function createSelect(text,param) {
    return $('<select/>', {
        id:text,
        change: function()
        {
        	document.execCommand(param, false, this.value);	
        	this.selectedIndex=0;
        }
    });
}

function createImageInput() {
    return $('<input/>', {
        type:"file",
        id:"imageSelector",
        click: function()
        {
			var file = $("#imageSelector").prop("files")[0];
	        var reader  = new FileReader();
	        reader.onload = function(e)  {
	            document.execCommand('insertImage', false, reader.result);
	        }
			if (file)
	        	reader.readAsDataURL(file);
        }
    });
}

function createEditPanel()
{
	$('body').prepend('<nav id ="editpanel"></nav>');
	$('#editpanel').addClass('editpanel');
	for(var pair of buttons.entries())
		$('#editpanel').append(createButton(pair[0],pair[1]));
	

	$('#editpanel').append(createSelect("fontSizeSelect",'fontSize'));
	$('#fontSizeSelect').append("<option selected> - размер -");

	for (var i = 1; i < 8; i++) 
		$('#fontSizeSelect').append("<option value="+i+">" + i);	
	
	
	$('#editpanel').append(createSelect("fontNameSelect",'fontName'));
	$('#fontNameSelect').append("<option selected> - шрифт -");
	
	for (var fontName of fontNames)
		$('#fontNameSelect').append("<option value="+fontName+">" + fontName);	
	
	$('#editpanel').append(createSelect("typeNameSelect",'formatblock'));
	$('#typeNameSelect').append("<option selected> - формат -");

	for (var typePair of textTypes)
		$('#typeNameSelect').append("<option value="+typePair[1]+">" + typePair[0]);


	$('#editpanel').append(createButton("Очистить формат","removeFormat"));
	$('#editpanel').append(createImageInput());


}
function save()
{	 
	var myTxt = "<article id=\"article_content\">" + $('#article_content').html() + "</article>";
	// console.log("Updating article_content: "+ myTxt.trim() );
	var path = window.location.pathname;
	console.log(path);
	//var page = path.split("/").pop();
	$.ajax({
	  type: 'post',
	  url:  '../../../php/savePage.php',
	  data: 'content=' + encodeURIComponent(myTxt) + "&page_id=" + path
	});
  
}

function start_edit() {

	if(!panelCreated)
	{
		createEditPanel();
		panelCreated=true;
	}
	
	if (isEditing==false) 
	{
		isEditing=true;
		$('#editpanel').show();
		$('#article_content').attr("contenteditable",'true');
	}

	else
	{
		isEditing=false;
		$('#editpanel').hide();
		$('#article_content').attr("contenteditable",'false');
		save();
	}
}

