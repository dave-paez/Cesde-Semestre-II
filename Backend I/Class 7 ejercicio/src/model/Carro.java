package model;

public class Carro  extends Vehiculo{
    private int puerta;

    public Carro() {
    }

    public Carro(String color, String marca, int cilindrada, int puerta) {
        super(color, marca, cilindrada);
        this.puerta = puerta;
    }

    public void encenderRadio(){
        System.out.println("Encendiendo la radio <- calse hijo");
    }
    public int getPuerta() {
        return puerta;
    }

    public void setPuerta(int puerta) {
        this.puerta = puerta;
    }
}
