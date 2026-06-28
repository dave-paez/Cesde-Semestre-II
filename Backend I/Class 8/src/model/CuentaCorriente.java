package model;

public class CuentaCorriente extends Cuenta{

    private double sobreGiro;
    private int numDias;
    
    public CuentaCorriente(){
        super();
    }

    @Override
    public void consultarSaldo(){
        System.out.println("Cuenta Corriente");
    }

    public CuentaCorriente(double sobreGiro, int numDias) {
        this.sobreGiro = sobreGiro;
        this.numDias = numDias;
    }

    public CuentaCorriente(String numCuenta, double saldo, int movmientos, double sobreGiro, int numDias) {
        super(numCuenta, saldo, movmientos);
        this.sobreGiro = sobreGiro;
        this.numDias = numDias;
    }

    public double getSobreGiro() {
        return sobreGiro;
    }
    public void setSobreGiro(double sobreGiro) {
        this.sobreGiro = sobreGiro;
    }
    public int getNumDias() {
        return numDias;
    }
    public void setNumDias(int numDias) {
        this.numDias = numDias;
    }
    
}
