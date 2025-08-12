import { readFile } from 'fs/promises';

export async function readTestFile() {
  try {
    return await readFile('./2015/02/test.txt', 'utf8');
  } catch (err) {
    console.error(err);
  }
}

export async function readProdFile() {
  try {
    return await readFile('./2015/02/prod.txt', 'utf8');
  } catch (err) {
    console.error(err);
  }
}

