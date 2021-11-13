<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/article", name = "article")
 */
class ArticleController extends AbstractController
{
	/**
	 * @Route("/{id}", name = "_detail")
	 */
	public function detail($id) : Response
	{
		return $this->render(
			'this.html.twig',
			[
				'page_title' => 'Some title',
			 	'id' => $id
			]);
	}
}
