// unused but alternative methods to format inital data with
export function dataNormalizer(data) {
    // formats top level objects to have same properties
    const schema = { name: "", areSubItemsVisible: false, properties: [] }
    const initialObj = Object.assign({}, schema, {
      name : "General Info",
      areSubItemsVisible : true,
    });
    const groups = data.reduce((accum, group, index) => {
      if(group.containing_object) {
        let newGroup = Object.assign({}, schema, {
          properties : group.containing_object.properties,
          name : group.name,
        });
        accum = accum.concat(newGroup);
        return accum;
      } else {
        accum[0].properties = accum[0].properties.concat(group);
        return accum;
      }
    }, [initialObj])
    return groups;
}

export function filterMethod(data) {
    const groups = data.filter(group => {
      if(group.containing_object) {
        group.properties = group.containing_object.properties;
        return group
      } 
      return false;
    });
    const generalInfo = {
      properties: data.filter(i => !i.containing_object),
      name: "General Info",
      areSubItemsVisible: true
    };
    return [ generalInfo, ...groups ];
}