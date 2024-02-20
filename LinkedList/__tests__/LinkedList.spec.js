const exp = require('constants');
const {LinkedList}  = require('../LinkedList');

const init = ()=>{
  const list = new LinkedList();
  list.append('a');
  list.append('b');
  list.append('c');
  return list
}

describe('Linked List', () => {
  test('Append', () => {
    const list = init();
    expect(list.toString()).toBe('a,b,c');
    expect(list.head.value).toBe('a');
    expect(list.tail.value).toBe('c');
    list.append('d');
    expect(list.tail.value).toEqual('d')
  });

  test('Prepend', () => {
    const list = init();
    expect(list.toString()).toBe('a,b,c');
    expect(list.head.value).toBe('a');
    expect(list.tail.value).toBe('c');
    list.prepend('-a');
    expect(list.head.value).toEqual('-a');
    expect(list.toString()).toBe('-a,a,b,c')
  });

  test('Find', () => {
    const list = init();
    const found = list.find('b')
    const notFound = list.find('asd')
    expect(found.value).toEqual('b')
    expect(notFound).toBeNull();
  });

  test('Delete', ()=>{
    const list = init();
    list.delete('a');
    expect(list.toString()).toBe('b,c')
    list.delete('b');
    expect(list.toString()).toBe('c')
    list.delete('c');
    expect(list.toString()).toBe('')
  })

  test('Insert After', ()=>{
    const list = init();
    let prev = list.find('b')
    list.insertAfter('ba', prev);
    expect(list.toString()).toBe('a,b,ba,c')
    
    prev = list.find('c')
    list.insertAfter('ca', prev);
    expect(list.toString()).toBe('a,b,ba,c,ca')
  })
});