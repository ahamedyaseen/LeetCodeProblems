/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(list1, list2) {

  var quotient = 0;
  var list3;
  var head = null;
  var temp = null;
  var list1Val = 0;
  var list2Val =0;

  do{

    if(list1 == null) {
      list1Val = 0;
    } else{
        list1Val=list1.val;
    }  
    list2 == null ? list2Val = 0 : list2Val = list2.val;
  
  var sum = quotient + list1Val + list2Val;
  var quotient = parseInt (sum / 10);
  var carry = parseInt (sum % 10);
  if(quotient!=0){
    list3 = new ListNode(carry);
  }else{
    list3 = new ListNode(sum);
  }

  
  
  if(head == null){
    head =list3;
    temp =list3;
    
  }else{
    temp.next = list3;
    temp = list3;
  }
  

if(list1 != null){
list1.next != null ? list1 =list1.next : list1 =null;
}

if(list2 !=null){
list2.next != null ? list2 =list2.next : list2 =null;
}

 if(list1 == null || list2 == null){
   if(quotient){
    temp.next = new ListNode(quotient);
   }
  }
  
  

  
  }
  while( list1 !=null ||  list2 !=null);

return head;
};


 