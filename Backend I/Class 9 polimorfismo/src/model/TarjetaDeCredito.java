package model;

public class TarjetaDeCredito extends MetodoPago {

    @Override
    public void procesar(double monto){
        System.out.println("Cobrand $"+ monto +" a la tarjeta de VISA terminada en 1234");
    }
}
