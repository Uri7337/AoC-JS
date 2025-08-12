import { readFile } from 'fs/promises';

export async function readTestFile(day) {
  try {
    return await readFile('./2015/'+day+'/test.txt', 'utf8');
  } catch (err) {
    console.error(err);
  }
}

export async function readProdFile(day) {
  try {
    return await readFile('./2015/'+day+'/prod.txt', 'utf8');
  } catch (err) {
    console.error(err);
  }
}

