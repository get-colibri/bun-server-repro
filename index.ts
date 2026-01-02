// @ts-nocheck
import { openLegitFsWithMemoryFs } from '@legit-sdk/core/server';

async function main() {
  const legitFs = await openLegitFsWithMemoryFs();
  const dir = await legitFs.promises.readdir('/', 'utf8');
  console.log(dir);
}

main();
