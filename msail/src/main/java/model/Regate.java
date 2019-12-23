package model;

public class Regate {
	protected String ville;
	protected String departement;
	public String getVille() {
		return ville;
	}
	public void setVille(String ville) {
		this.ville = ville;
	}
	public String getDepartement() {
		return departement;
	}
	public void setDepartement(String departement) {
		this.departement = departement;
	}
	@Override
	public String toString() {
		return "Regate [ville=" + ville + ", departement=" + departement + "]";
	}
	public Regate(String ville, String departement) {
		super();
		this.ville = ville;
		this.departement = departement;
	}
	
	
}
