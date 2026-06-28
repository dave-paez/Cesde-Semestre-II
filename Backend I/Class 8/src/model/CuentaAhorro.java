package model;

public class CuentaAhorro extends Cuenta{
    
    private double interes;

    public CuentaAhorro(){
        super();
    }

    @Override
    public void consultarSaldo(){
       System.out.println("Cuenta Ahorro");
    }

    public CuentaAhorro(double interes) {
        this.interes = interes;
    }

    public CuentaAhorro(String numCuenta, double saldo, int movmientos, double interes) {
        super(numCuenta, saldo, movmientos);
        this.interes = interes;
    }

    public double getInteres() {
        return interes;
    }

    public void setInteres(double interes) {
        this.interes = interes;
    }
}
