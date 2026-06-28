import model.Perro;

public class App {
    public static void main(String[] args) throws Exception {
        
        Perro rocky = new Perro("Criollo", "Cafe", "Puchi", 6.1);
        
        Perro balboa = new Perro("Labrador", "Negro", "Asesino", 8.1);

        rocky.ladrar();

        String resultado = rocky.ladrar();
        rocky.llamar();
        System.out.println(resultado);
        System.out.println(rocky.ladrar());

        System.out.println(rocky.getNombre());
        System.out.println(rocky.getColor());
        System.out.println(rocky.getEdad());
        System.out.println(rocky.getPeso());
        System.out.println(rocky.getRaza());
        rocky.llamar();

        balboa.llamar();
        
    }
}
