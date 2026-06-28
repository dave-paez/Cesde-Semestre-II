package model;

public class Vehiculo {
    private String color;
    private String marca;
    private int cilindrada;

    public Vehiculo(){
    }
    
    public Vehiculo(String color, String marca, int cilindrada) {
        this.color = color;
        this.marca = marca;
        this.cilindrada = cilindrada;
    }

    public void llantas(){
        System.out.println("El vehiculo tiene llantas <- clase padre");
    }
    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public int getCilindrada() {
        return cilindrada;
    }

    public void setCilindrada(int cilindrada) {
        this.cilindrada = cilindrada;
    }
    
}
