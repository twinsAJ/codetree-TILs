import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        // 31일 = 1,3,5,7,8,10,12월
        // 28일 = 2월
        // 30일 = 4,6,9,11월
        
        if(n%2==0 && n<=7){
            if(n!=2){
                System.out.print(30);
            }
            else{
                System.out.print(28);
            }
        }
        else if(n%2==1 && n<=7){
            System.out.print(31);
        }
        if(n%2==0 && n>7){
            System.out.print(31);
        }
        else if(n%2==1 && n>7){
            System.out.print(30);
    }
}