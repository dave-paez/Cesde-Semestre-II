package model;

public class Paypal extends MetodoPago{
    
    @Override
    public void procesar(double monto){
        System.out.println("Redirigiendo a PayPal para cobrar $"+ monto);
    }

}
