// 중복값을 제거하는 Set을 이용해 수량을 확인하고, nums/2 값보다 크면 반만, 작으면 중복값만큼 가져감.
function solution(nums) {
  const max = nums.length / 2;
  const setNumsCount = new Set(nums).size;
  return setNumsCount >= max ? max : setNumsCount;
}
