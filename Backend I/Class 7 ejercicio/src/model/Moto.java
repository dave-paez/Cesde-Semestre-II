package model;

public class Moto extends Vehiculo{
        private String gatolateral;

        public Moto() {
        }

        public Moto(String color, String marca, int cilindrada, String gatolateral) {
            super(color, marca, cilindrada);
            this.gatolateral = gatolateral;
        }

        public void endo(){
            System.out.println("Endo realizado <-clase hijo");
        }

        public String getGatolateral() {
            return gatolateral;
        }

        public void setGatolateral(String gatolateral) {
            this.gatolateral = gatolateral;
        }
}
