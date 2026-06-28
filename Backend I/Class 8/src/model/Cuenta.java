package model;

public class Cuenta {

    private String numCuenta;
    private double saldo;
    private int movmientos;
    
    public Cuenta(){
        super();
    }
    
    public void consultarSaldo(){
        System.out.println("Cuenta padre");
    }

    public double retirarDinero(int retirar){
        return getSaldo() - retirar;
        
    }

    public Cuenta(String numCuenta, double saldo, int movmientos) {
        this.numCuenta = numCuenta;
        this.saldo = saldo;
        this.movmientos = movmientos;
    }

    public String getNumCuenta() {
        return numCuenta;
    }

    public void setNumCuenta(String numCuenta) {
        this.numCuenta = numCuenta;
    }

    public double getSaldo() {
        return saldo;
    }

    public void setSaldo(double saldo) {
        this.saldo = saldo;
    }

    public int getMovmientos() {
        return movmientos;
    }

    public void setMovmientos(int movmientos) {
        this.movmientos = movmientos;
    }


}
