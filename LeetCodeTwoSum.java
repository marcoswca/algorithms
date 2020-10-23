import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class LeetCodeTwoSum {
    public static int[] twoSum(int[] nums, int target) {
        int[] response = new int[2];
        Map<Integer, List<Integer>> map = new HashMap<>();

        for (int i = 0; i < nums.length; i++) {
            int number = nums[i];
            if (map.containsKey(number)) {
                map.get(number).add(i);
            } else {
                map.put(number, new ArrayList<>(Arrays.asList(i)));
            }
        }

        for (int i = 0; i < nums.length; i++) {
            int numberToFind = target - nums[i];
            if (map.containsKey(numberToFind) && map.get(numberToFind).get(map.get(numberToFind).size() - 1) != i) {
                response[0] = i;
                response[1] = map.get(numberToFind).get(map.get(numberToFind).size() - 1);
                return response;
            }
        }
        return new int[]{};
    }

    public static void main(String[] args) {
        System.out.println(Arrays.toString(twoSum(new int[]{7, 2, 11, 15}, 9)));
        System.out.println(Arrays.toString(twoSum(new int[]{2, 7, 11, 15}, 9)));
        System.out.println(Arrays.toString(twoSum(new int[]{3, 2, 4}, 6)));
        System.out.println(Arrays.toString(twoSum(new int[]{3, 3}, 6)));
    }
}
