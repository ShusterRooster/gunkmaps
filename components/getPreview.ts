// import * as fs from 'fs'
//
// export default function balls(input: string) {
//     const preview = fs.readFileSync(input, "utf-8")
//     const choppedPrev = preview.substring(0,40)
//     console.log(choppedPrev)
// }

    const reader = new FileReaderSync();

    export default function balls(textFile: File){
      //reader.readAsText(textFile)
        let prev: string = String(reader.readAsText(textFile))
        console.log(prev.substring(0,40))
        return prev.substring(0,40)
    }