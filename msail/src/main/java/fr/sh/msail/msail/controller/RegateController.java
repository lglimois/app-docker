package fr.sh.msail.msail.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import model.Regate;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class RegateController {

	@GetMapping("/regates")
	public List<Regate> regates()
	{
		List<Regate> lstRegate = new ArrayList<Regate>();
		Regate regate1 = new Regate("Piriac", "44");
		Regate regate2 = new Regate("La Baule", "44");
		lstRegate.add(regate1);
		lstRegate.add(regate2);
		return lstRegate;
	}
	
}
