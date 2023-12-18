public class Solution {
    public String solution(String message, int K) {
        

        // if message is shorter than K return as it is
        if (message.length() <= K) {
            return message;
        }
        
        // if message is longer than K, reduce K to account for " ..."
        
        // define length of suffix " ..." to be added 
        int suffixLength = 4;
        
        // update K
        K -= suffixLength;

        // if the updated K is less than 0, no message could be passed so return
        if (K <= 0) {
            return "...";
        }

        // find the last separator within updated K
        int lastSeparator = -1;
        for (int i = 0; i < K; i++) {
            if (message.charAt(i) == ' ') {
                lastSeparator = i;
            }
        }

        // if there is no separator i.e, single token larger than updated K
        if (lastSeparator == -1) {
            return "...";
        }

        // build the new truncated message with suffix  " ..."
        return message.substring(0, lastSeparator) + " ...";
    }

    // test the functions with some cases
    public static void main(String[] args) {
        Solution solution = new Solution();

        // test cases 
        System.out.println(solution.solution("And now here is my secret", 15)); // "And now ..."
        System.out.println(solution.solution("Hi User How are you?", 10)); // "Hi ..."
        System.out.println(solution.solution("Hi User How are you?", 15)); // "Hi User ..."
        System.out.println(solution.solution("Hi User How are you?", 20)); // "Hi User How are you?"
        System.out.println(solution.solution("Short message < K", 20)); // "Short message < K"
        System.out.println(solution.solution("SingleLargeToken", 10)); // "..."
        
    }
}
