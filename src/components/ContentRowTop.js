import React from 'react';
import ContentRowCellphone from './ContentRowCellphone';
import LastCellphoneInDb from './LastCellphoneInDb';
import CategoryInDb from './CategoryInDb';
import CellphonesInDb from './CellphonesInDb';


function ContentRowTop(){
    return(
        <React.Fragment>

				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">Cellnow Dashboard</h1>
					</div>
			
					<ContentRowCellphone />
					<div className='row'>
						<LastCellphoneInDb />
						<CategoryInDb />
					</div>
					<CellphonesInDb />

				</div>


        </React.Fragment>
    )

}
export default ContentRowTop;