import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AnimalsTableCell from './AnimalsTableCell';

function AnimalsTable(props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableBody>
            <TableRow>
		{props.animals.map(row => {
		    return(
			<AnimalsTableCell   animalName={row.animalName} 
                                animalId={row.animalId} 
                                animalSpecies={row.animalSpecies} 
                                weight={row.weight} 
                                tattooNum={row.Tatto_Num}
                                cityTattoo={row.CityTatoo}
                                sex={row.sex} 
                                animalAvailability={row.animalAvailability} 
                                url={row.fileURL}
                                breed={row.Breed} 
                                rfid={row.rfid} 
                                subSpecies={row.subSpecies} 

                                />
		    )
		})}
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default AnimalsTable;
