import model.Carro;
import model.Moto;

public class App {
    public static void main(String[] args) throws Exception {

        //Objeto Carro
        System.out.println("Carro");
        Carro primerCarro = new Carro("Rojo", "Mustan", 450, 4);
        primerCarro.encenderRadio();
        primerCarro.llantas();

        //Obejto Moto
        System.out.println("Moto");
        Moto primerMoto = new Moto("Blanco", "Suzuki", 250, "si");
        primerMoto.endo();
        primerMoto.llantas();
    }
}
