// Load the full build.
import _ from 'lodash';

const data = [
    {
        username:'mara',
        role: 'admin'
    },
    {
        username:'dietmar',
        role: 'seller'
    },
    {
        username:'eduard',
        role: 'customer'
    },
    {
        username:'claudi',
        role: 'customer'
    },
];
const rta = _.groupBy(data, (item) => item.role);
console.log(rta);