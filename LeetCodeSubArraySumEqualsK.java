import java.util.HashMap;

public class LeetCodeSubArraySumEqualsK {

    public static void main(String[] args) {
        System.out.println(subarraySum(new int[]{1, 1, 1}, 2));
        System.out.println(subarraySum(new int[]{1, 1, 3}, 3));
        System.out.println(subarraySum(new int[]{1, 2, 3, 2, 5}, 5));
        System.out.println(subarraySum(new int[]{100, 1, 2, 3, 4}, 6));
    }

    public static int subarraySum(int[] nums, int k) {
        int count = 0, sum = 0;
        HashMap<Integer, Integer> map = new HashMap<>();
        map.put(0, 1);
        for (int i = 0; i < nums.length; i++) {
            sum += nums[i];
            if (map.containsKey(sum - k))
                count += map.get(sum - k);
            map.put(sum, map.getOrDefault(sum, 0) + 1);
        }
        return count;
    }
}
