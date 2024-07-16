import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        // 여기에 코드를 작성해주세요.
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        int c = sc.nextInt();

        if(a>b && b>c || c>b && b>a){
            System.out.print(b);
        }
        if(b>a && a>c || c>a && a>b){
            System.out.print(a);
        }
        if(b>c && c>a || a>c && c>b){
            System.out.print(c);
        }
    }
}