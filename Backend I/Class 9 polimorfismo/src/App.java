import model.MetodoPago;
import model.Paypal;
import model.TarjetaDeCredito;

public class App {
    public static void main(String[] args) throws Exception {

        MetodoPago pago1 = new MetodoPago();
        MetodoPago pago2 = new TarjetaDeCredito();
        MetodoPago pago3= new Paypal();


        pago1.procesar(20);
        pago2.procesar(100);
        pago3.procesar(200);



    
    }
}
