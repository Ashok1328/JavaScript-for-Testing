class Count
{
  #count =0;

  increment()
  {
    this.#count++;
  }

  getCount()
  {
    return this.#count;
  }
}

const c = new Count();
c.increment();
console.log(c.getCount());