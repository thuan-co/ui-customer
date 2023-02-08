import { Autocomplete, Button, TextField } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { cityActions } from '../../features/redux-saga/Address/AddressSlice';
import { RootState } from '../../app/store';
import { AddressDto, City, Commune, District } from '../../model/other';
import { districtActions } from '../../features/redux-saga/Address/DistrictSlice';
import { communeActions } from '../../features/redux-saga/Address/CommuneSlice';
import { useEffect, useState } from 'react';

type Prop = {
    located: AddressDto,
    updatedFunc: (located:AddressDto, name:string, value:string) => void,
    // setLocated: () => void
}

export default function SelectAddress(props:Prop) {

    const dispatch = useAppDispatch()

    const citiesSelector = useAppSelector((state:RootState) => state.city)
    const districtsSelector = useAppSelector((state:RootState) => state.district)
    const communesSelector = useAppSelector((state:RootState) => state.commune)

    // const [located, setLocated] = useState<AddressDto>(props.located)

    const [city, setCity] = useState<City | null>({
        id: '',
        name: '',
    })

    const [district, setDistrict] = useState<District | null>({
        id: '',
        cityId: '',
        name: '',
    })

    const [commune, setCommune] = useState<Commune | null>({
        id: '',
        districtId: '',
        name: '',
    })

    useEffect(()=> {

        if (citiesSelector.length === 0) {
            dispatch(cityActions.fetchingCites())
        }
    },[])

    return(
        <div className='relative my-10'>

            <span className=''>Địa chỉ nhận hàng:</span>

            <div className='mt-3 grid-flow-col grid gap-x-1 w-full'>
                <Autocomplete 
                    value={city}
                    onChange={(event: any, citySelected: City | null) => {

                        if (citySelected !== null) {
                            setCity(citySelected)
                            dispatch(districtActions.fetchingDistricts(citySelected))
                            // setLocated({...located, 'cityId':citySelected?.id})
                            props.updatedFunc(props.located, 'cityId', citySelected.id)
                        }
                        // console.log("City name: ", city)
                    }}
                    disablePortal
                    id='city-selected'
                    options={citiesSelector}
                    getOptionLabel={(option) => option.name}
                    renderInput={(params) => <TextField {...params} label="Tỉnh/Thành phố" inputProps={{
                        ...params.inputProps
                    }} />}
                />

                <Autocomplete 
                    id='district-selected'
                    value={district}
                    onChange={(event: any, districtSelected: District | null) => {          
                        if (districtSelected !== null) {
                            setDistrict(districtSelected)
                            // setLocated({...located, 'districtId':districtSelected?.id})
                            props.updatedFunc(props.located, 'districtId', districtSelected.id)
                            dispatch(communeActions.fetchCommunes(districtSelected))
                        }
                    }}
                    disablePortal
                    options={districtsSelector}
                    getOptionLabel={(option) => option.name}
                    renderInput={(params) => <TextField {...params} label="Quận/Huyện" inputProps={{
                        ...params.inputProps
                    }} />}
                />

                <Autocomplete 
                    id='commune-selected'
                    value={commune}
                    options={communesSelector}
                    onChange={(event: any, communeSelected: Commune | null) => {
                        if (communeSelected !== null) {
                            setCommune(communeSelected)
                            props.updatedFunc(props.located, 'communeId', communeSelected.id)
                        }
                    }}
                    getOptionLabel={(option) => option.name}
                    disablePortal
                    renderInput={(params) => <TextField {...params} label="Xã/Phường" inputProps={{
                        ...params.inputProps
                    }} />}
                />

                <TextField placeholder="Địa chỉ cụ thể" onChange={(event) => {
                    props.updatedFunc(props.located, 'details', event.target.value)
                }}/>

                {/* <Button sx={{width: 150+'px'}} variant='contained'>Xác nhận</Button> */}
            </div>
        </div>
        
    )
}