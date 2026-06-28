import java.security.KeyStore.Entry;
import java.util.HashMap;
import java.util.Map;

public class App {
    public static void main(String[] args) throws Exception {
        /* //ArrayList
        List<String> nom = new ArrayList<>();
        
        //Agregar elementos
        nom.add("30");
        nom.add("Manzana");
        nom.add("Puerta");
        
        //recuperar
        nom.get(0);
        System.out.println("El primer elemento es: "+ nom.get(0));
        System.out.println("El ultimo elemento es: "+ nom.getLast());

        //Actualizar
        nom.set(1, "Pera");
        System.out.println("El segundo elemento es: "+ nom.get(1));

        //Recorrido
        int size = nom.size();
        System.out.println("El ultimo elemento es: "+ nom.get(size-1));

        for (String n : nom) {
            System.out.println("El elemento es: "+ n);
        }
        */
        
        
        Map<String, Double> patron = new HashMap<>();

        //Agregar
        patron.put("Salario", 20.3);
        patron.put("Hector", 24.3);

        //Recuperar
        patron.get("Salario");
        System.out.println(patron.get("Salario"));
        Double resultado = patron.get("Hector");
        System.out.println(resultado);

        //Recorrer
        for (Map, Entry<String, Double> entrada : patron.entrySet()) {
            System.out.println();
        }
    
    }
}
