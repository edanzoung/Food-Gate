import React from 'react';
import Tab from '@material-ui/core/Tab';
import RestaurantRoundedIcon from '@mui/icons-material/RestaurantRounded';
import DinnerDiningRoundedIcon from '@mui/icons-material/DinnerDiningRounded';
import BakeryDiningRoundedIcon from '@mui/icons-material/BakeryDiningRounded';
import LiquorRoundedIcon from '@mui/icons-material/LiquorRounded';
import EmojiFoodBeverageRoundedIcon from '@mui/icons-material/EmojiFoodBeverageRounded';

function Categories({ filterCategory, tabsData }) {
    const list_icons = (item) => {
        if (item === 'tout') {
            return <RestaurantRoundedIcon />;
        } else if (item === 'plats') {
            return <DinnerDiningRoundedIcon />;
        } else if (item === 'desserts') {
            return <BakeryDiningRoundedIcon />;
        } else if (item === 'boissons') {
            return <LiquorRoundedIcon />;
        } else if (item === 'cafes') {
            return <EmojiFoodBeverageRoundedIcon />;
        }
    };
    return (
        tabsData.map((category, index) => {
            return (
                <Tab icon={list_icons(category)} iconPosition="start"
                onClick={() => { filterCategory(category) }} 
                key={index} label={category} />
            )
        })
    )
}
export default Categories;