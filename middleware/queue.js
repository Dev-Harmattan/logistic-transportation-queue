function Queue() {
  this.customers = {};
  this.head = 0;
  this.tail = 0;
  this.slot = 0;
  this.counter = 0
  this.dayCount = 0;
}

// Queue.prototype.counter = 0;
// Queue.prototype.slot = 0;
// Queue.prototype.dayCount = 0;

Queue.prototype.enqueue = function(data){
  // this.slot += 1;

  if(this.counter % 5 == 0){
    // this.dayCount++;
    this.slot = 1
  } 

  let date = this.getNextDate(this.dayCount);
  data.date_alocate = date;
  data.slot = this.slot;
  this.customers[this.tail] = data;
  this.tail++;
}

Queue.prototype.dequeue = function() {
  let nextCustomer = this.customers[this.head];
  delete this.customers[this.head];
  this.head++;
  return nextCustomer;
}

Queue.prototype.getTodayDate = function(){
  return new Date().toISOString().slice(0, 10);
}

Queue.prototype.getNextDate = function(d){
  let counter = 0;
  if(d){
    counter = d;
  }
  let todayDate = new Date();
  let nextDate = new Date(todayDate);
  nextDate.setDate(todayDate.getDate() + counter);

  return nextDate.toISOString().slice(0, 10);
}

Queue.prototype.isEmpty = function(){
  return this.customers.length == 0;
}

Queue.prototype.length = function() {
  return this.customers.length;
}

Queue.prototype.peek = function() {
  return !this.isEmpty() ? this.customers[0] : undefined;
}

module.exports = Queue;




