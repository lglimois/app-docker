package fr.sh.msail.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fr.sh.msail.model.Coureur;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class CoureurController {

	@GetMapping("/coureurs")
	public List<Coureur> coureurs()
	{
		List<Coureur> lstCoureur = new ArrayList<Coureur>();
		Coureur coureur1 = new Coureur("Loic", 2);
		Coureur coureur2 = new Coureur("Francois", 5);
		Coureur coureur3 = new Coureur("Philippe", 12);
		Coureur coureur4 = new Coureur("Maewenn", 3);
		lstCoureur.add(coureur1);
		lstCoureur.add(coureur2);
		lstCoureur.add(coureur3);
		lstCoureur.add(coureur4);
		System.out.println(lstCoureur);
		return lstCoureur;
	}
	
}
