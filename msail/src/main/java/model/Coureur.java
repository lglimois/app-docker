package model;

public class Coureur {
	protected String sName;
	protected int iClassement;
	public String getsName() {
		return sName;
	}
	public void setsName(String sName) {
		this.sName = sName;
	}
	public int getiClassement() {
		return iClassement;
	}
	public void setiClassement(int iClassement) {
		this.iClassement = iClassement;
	}
	@Override
	public String toString() {
		return "Coureur [sName=" + sName + ", iClassement=" + iClassement + "]";
	}
	public Coureur(String sName, int iClassement) {
		super();
		this.sName = sName;
		this.iClassement = iClassement;
	}

	
	
	
}
