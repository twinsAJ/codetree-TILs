import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        // 여기에 코드를 작성해주세요.
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        String b = sc.next();
        int c = sc.nextInt();
        String d = sc.next();

        if((a>=19 && b.equals("M")) || (c>=19 && d.equals("M"))){
            System.out.print(1);
        }
        else{
            System.out.print(0);
        }

    }
}