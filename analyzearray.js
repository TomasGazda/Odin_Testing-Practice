function AnalyzeArray(array){
    let sorted = array.sort();
    const result = {};
    result['average'] = array.reduce((a, b) => a + b) / array.length;
    result['min'] = sorted[0];
    result['max'] = sorted[sorted.length-1];
    result['length'] = array.length;

    return result
}

export {AnalyzeArray};