import javax.swing.JOptionPane;

public class Modularidad {
    public static void main(String[] args) throws Exception {

    String nombre, correo, ciudad;
    int edad;
    nombre = JOptionPane.showInputDialog("Ingrese su nombre");
    correo = JOptionPane.showInputDialog("Ingrese su correo electronico");
    ciudad = JOptionPane.showInputDialog("Ingrese su ciudad de recidencia");
    edad = Integer.parseInt(JOptionPane.showInputDialog("Ingrese su edad"));
    JOptionPane.showMessageDialog(null,"La persona de nombre: "+ nombre +" Con correo: "+ correo +" Y ciudad de residencia: "+ ciudad +" Tiene una edad de: "+ edad +" años");
        
    }
}
