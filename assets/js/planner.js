class Planner{
  static counter = 0;
  static dayCount = 0;
  
  constructor(){
    if(Planner.counter >= 4){
       Planner.counter = 0;
        this.day = ++Planner.dayCount;
    }
    this.slot = ++Planner.counter;
    this.day = Planner.dayCount;
    this.datas = [];
  }

  isEmpty(){
    return this.datas.length == 0;
  }

  length(){
    return this.datas.length;
  }

  peek(){
    return !this.isEmpty() ? this.datas[0] : undefined;
  }

  enqueue(item){
    item.slot = this.slot;
    item.date_alocate = this.getNextDate(this.day);
    this.datas.push(item);
  }

  dequeue(){
    let removeData = this.datas.shift();
    return removeData;
  }

  getNextDate(d){
    let todayDate = new Date();
    let nextDate = new Date(todayDate);
    nextDate.setDate(todayDate.getDate() + d);
    return nextDate.toISOString().slice(0, 10);
  }

  getDate(){
    return new Date().toISOString().slice(0, 10);
  }

}