import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double r = sc.nextDouble();
        double l = sc.nextDouble();

        if(r>=1 && l>=1){
            System.out.print("High");
        }
        else if(r>=0.5 && l>=0.5){
            System.out.print("Middle");
        }
        else{
            System.out.print("Low");
        }
    }
}