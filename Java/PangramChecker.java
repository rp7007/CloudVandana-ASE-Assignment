import java.util.Scanner;

public class PangramChecker {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a sentence: ");
        String sentence = scanner.nextLine().toLowerCase(); // Convert to lowercase for case-insensitive comparison

        if (isPangram(sentence)) {
            System.out.println("The sentence is a pangram.");
        } else {
            System.out.println("The sentence is not a pangram.");
        }

        scanner.close();
    }

    public static boolean isPangram(String sentence) {
        boolean[] isAlphabetPresent = new boolean[26]; // 26 letters from a to z

        for (int i = 0; i < sentence.length(); i++) {
            char c = sentence.charAt(i);
            if (Character.isLetter(c)) {
                int index = c - 'a'; // Convert the character to an index (0-25)
                isAlphabetPresent[index] = true;
            }
        }

        for (boolean present : isAlphabetPresent) {
            if (!present) {
                return false;
            }
        }

        return true;
    }
}
