import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        // 여기에 코드를 작성해주세요.
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        if(a==3 || a==4 || a==5){
            System.out.print("Spring");
        }
        if(a==6 || a==7 || a==8){
            System.out.print("Summer");
        }
        if(a==9 || a==10 || a==11){
            System.out.print("Fall");
        }
        if(a==12 || a==1 || a==2){
            System.out.print("Winter");
        }
    }
}