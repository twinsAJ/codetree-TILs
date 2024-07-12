import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        // 여기에 코드를 작성해주세요.
        Scanner sc = new Scanner(System.in);
        int aa = sc.nextInt();
        int ab = sc.nextInt();
        int ba = sc.nextInt();
        int bb = sc.nextInt();

        if(aa>ba && ab>bb){
            System.out.println(1);
        }
        else{
            System.out.println(0);
        }
    }
}