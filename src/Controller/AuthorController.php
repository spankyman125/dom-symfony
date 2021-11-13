<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/author", name = "author")
 */
class AuthorController extends AbstractController
{
    /**
     * @Route("/all", name="_list")
     */
    public function all()
    {
        
    }

    /**
     * @Route("/{id}", name="_detail")
     */
    public function detail(): Response
    {
        return $this->render('$0.html.twig', []);        
    }

}