import java.util.Scanner;

import models.User;

public class App {
    public static void main(String[] args) throws Exception {
        
        Scanner sc = new Scanner(System.in);

        System.out.println("Dame el nombre del usuario");
        String name = sc.nextLine();
        System.out.println("Dame el id del usuario");
        int id = sc.nextInt();
        sc.nextLine();
        System.out.println("Dame el phone del usuario");
        String phone = sc.nextLine();
        System.out.println("Dame el email del usuario");
        String email = sc.nextLine();

        User usuario = new User(name, id, phone, email);

        boolean condition = true;

        System.out.println("Bienvenido a la calculadora");

        while (condition) {
            System.out.println("Que operacion deseas realizar?");
            System.out.println("""
                    1. Sumar
                    2. Restar
                    3. Multiplicar
                    4. Dividir
                    5. Salir
                    """);
            int resultado = 0;
            System.out.println("Ingresa un numero");
            int num1 = sc.nextInt();
            System.out.println("Ingresa un numero");
            int num2 = sc.nextInt();
            int opcion = sc.nextInt();
            switch (opcion) {
                case 1:
                    resultado = usuario.suma(num1, num2);
                    break;
                case 2:
                    resultado = usuario.resta(num1, num2);
                    break;
                case 3:
                    resultado = usuario.multiplica(num1, num2);
                    break;
                case 4:
                    resultado = usuario.divide(num1, num2 );
                    break;
                case 5:
                    condition = false;
                    break;
                default:
                    System.out.println("El valor ingresado es incorrecto");
                    break;
            }
            System.out.println("El resultado es: "+ resultado);
        }



        sc.close();
    }
}