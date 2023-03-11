import { exec } from "child_process";

interface Answer {
  dev: string;
  type: string;
  hub: string;
  product: string;
  id: string;
}

export default function lsusbdev(e?: any) {
  return new Promise<Answer[]>(function (resolve, reject) {
    let callbacked = false;
    let timo = setTimeout(function () {
      if (!callbacked) {
        reject("timeout error");
      }
    }, 50000);

    exec(__dirname + "/list.sh", function (error, stdout, stderr) {
      callbacked = true;
      clearTimeout(timo);
      if (error && error != null) {
        reject(error);
      } else if (stderr) {
        reject(stderr);
      } else {
        resolve(JSON.parse(stdout + ""));
      }
    });
  });
}
