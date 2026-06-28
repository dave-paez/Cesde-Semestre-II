import model.Enfermero;
import model.Medico;
import model.Paciente;

public class App {
    public static void main(String[] args) throws Exception {

        //objeto Medico
        System.out.println("Medico");
        Medico primerMedico = new Medico("Roman", "1010", 25, "Cardiologia");

        primerMedico.diagnosticar();
        primerMedico.camniar();
        primerMedico.correr();
        System.out.println(primerMedico.correr());

        //Objeto Enfermero
        System.out.println("Enfermero");
        Enfermero primerEnfermero = new Enfermero("Santiago", "2020", 40, "Basiquito");

        primerEnfermero.camniar();
        primerEnfermero.correr();
        primerEnfermero.historia();

        //Objeto Paciente
        System.out.println("Paciente");
        Paciente primerPaciente = new Paciente("Tatiana", "3030", 21, "Asiste a clase pero se llama juan jose");

        primerPaciente.camniar();
        System.out.println(primerPaciente.correr());
        primerPaciente.esperar();

        
    }
}
