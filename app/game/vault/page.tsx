'use client';

import { Button } from "@/components/ui/button";
import { useState } from 'react';
import { vaultTables, getRandomEntry } from '@/lib/vaultTables';
import PageHeader from "@/components/page-header";
import { motion } from "framer-motion";
import Image from 'next/image'
import { getBasePath } from "@/lib/utils";
import { New_Rocker } from 'next/font/google';
import NavigationButtons from "@/components/navigation-buttons";

const newRocker = New_Rocker({ 
    weight: '400',
    subsets: ['latin']
});

const Vault = () => {
    const [vaultData, setVaultData] = useState({
        vaultName: '',
        statusText: '',
        dangerText: '',
        dwellerText: '',
        whatIsHere: '',
        entranceText: '',
        guardText: '',
        featureText: '',
        room1Text: '',
        room2Text: '',
        room3Text: '',
        room4Text: ''
    });

    const generateVault = () => {
        setVaultData({
            vaultName: getRandomEntry(vaultTables.names),
            statusText: getRandomEntry(vaultTables.status),
            dangerText: getRandomEntry(vaultTables.dangers),
            dwellerText: getRandomEntry(vaultTables.dwellers),
            whatIsHere: getRandomEntry(vaultTables.whatIsHere),
            entranceText: getRandomEntry(vaultTables.entrance),
            guardText: getRandomEntry(vaultTables.guards),
            featureText: getRandomEntry(vaultTables.features),
            room1Text: getRandomEntry(vaultTables.rooms),
            room2Text: getRandomEntry(vaultTables.rooms),
            room3Text: getRandomEntry(vaultTables.rooms),
            room4Text: getRandomEntry(vaultTables.rooms)
        });
    };

    const updateSingleField = (field: keyof typeof vaultData, table: typeof vaultTables[keyof typeof vaultTables]) => {
        setVaultData(prev => ({
            ...prev,
            [field]: getRandomEntry(table)
        }));
    };

    return (
        <div className="min-h-screen bg-black text-white p-4">
             <Image
            src={`${getBasePath()}/images/Vault-Dwellings.svg`}
            alt="Vault Dwellings"
            width={590}
            height={181}
            className="mx-auto"
            priority
          />

            <motion.div whileTap={{ scale: 0.9 }} className="mx-auto text-center">
                <Button 
                    variant="outline" 
                    onClick={generateVault} 
                    className="text-xl bg-transparent p-8 relative top-[-1.5rem] text-white border-white hover:bg-white hover:text-black w-fit"
                >Click to Enter</Button>
            </motion.div>
            <div className="grid grid-cols-1 auto-auto-rows-[minmax(min-content,max-content)] justify-items-center self-stretch max-w-[1000px] mx-auto">
                <div className="grid-area-[1/2] text-center p-8">
                    <PageHeader title={vaultData.vaultName} />
                </div>

                <div className="grid-area-[2/2] flex flex-row max-h-full w-full border-y border-white">
                    <div className="flex flex-col items-center flex-1 p-4">
                        <motion.div whileTap={{ scale: 0.9 }}>
                            <Button 
                                variant="outline" 
                                className="font-extralight bg-black text-white border-white hover:bg-white hover:text-black w-fit"
                                onClick={() => updateSingleField('statusText', vaultTables.status)}
                            >Status</Button>
                        </motion.div>
                        <div className="text-center py-4 text-xl" style={{ fontFamily: newRocker.style.fontFamily }}>{vaultData.statusText}</div>
                    </div>
                    <div className="flex flex-col items-center flex-1 p-4 border-x border-white">
                        <motion.div whileTap={{ scale: 0.9 }}>
                            <Button 
                                variant="outline" 
                                className="font-extralight bg-black text-white border-white hover:bg-white hover:text-black w-fit"
                                onClick={() => updateSingleField('dangerText', vaultTables.dangers)}
                            >Immiment Danger</Button>
                        </motion.div>
                        <div className="text-center py-4 text-xl" style={{ fontFamily: newRocker.style.fontFamily }}>{vaultData.dangerText}</div>
                    </div>
                    <div className="flex flex-col items-center flex-1 p-4">
                        <motion.div whileTap={{ scale: 0.9 }}>
                            <Button 
                                variant="outline" 
                                className="font-extralight bg-black text-white border-white hover:bg-white hover:text-black w-fit"
                                onClick={() => updateSingleField('dwellerText', vaultTables.dwellers)}
                            >Who are What dwells here?</Button>
                        </motion.div>
                        <div className="text-center py-4 text-xl" style={{ fontFamily: newRocker.style.fontFamily }}>{vaultData.dwellerText}</div>
                    </div>
                </div>

                <div className="grid-area-[3/2] flex flex-col py-4 pb-6">
                    <div className="flex flex-col items-center flex-1 p-4 text-center">
                        <motion.div whileTap={{ scale: 0.9 }}>
                            <Button 
                                variant="outline" 
                                className="font-extralight bg-black text-white border-white hover:bg-white hover:text-black w-fit"
                                onClick={() => updateSingleField('whatIsHere', vaultTables.whatIsHere)}
                            >what brings you here?</Button>
                        </motion.div>
                        <div className="text-center py-4 text-xl" style={{ fontFamily: newRocker.style.fontFamily }}>{vaultData.whatIsHere}</div>
                    </div>
                </div>

                <div className="grid-area-[4/2] flex flex-row max-h-full w-full border-y border-white">
                    <div className="flex flex-col items-center flex-1 p-4">
                        <motion.div whileTap={{ scale: 0.9 }}>
                            <Button 
                                variant="outline" 
                                className="font-extralight bg-black text-white border-white hover:bg-white hover:text-black w-fit"
                                onClick={() => updateSingleField('entranceText', vaultTables.entrance)}
                            >Entrance</Button>
                        </motion.div>
                        <div className="text-center py-4 text-xl" style={{ fontFamily: newRocker.style.fontFamily }}>{vaultData.entranceText}</div>
                    </div>
                    <div className="flex flex-col items-center flex-1 p-4 border-x border-white">
                        <motion.div whileTap={{ scale: 0.9 }}>
                            <Button 
                                variant="outline" 
                                    className="font-extralight bg-black text-white border-white hover:bg-white hover:text-black w-fit"
                                onClick={() => updateSingleField('guardText', vaultTables.guards)}
                            >Guarded by</Button>
                        </motion.div>
                        <div className="text-center py-4 text-xl" style={{ fontFamily: newRocker.style.fontFamily }}>{vaultData.guardText}</div>
                    </div>
                    <div className="flex flex-col items-center flex-1 p-4">
                        <motion.div whileTap={{ scale: 0.9 }}>
                            <Button 
                                variant="outline" 
                                className="font-extralight bg-black text-white border-white hover:bg-white hover:text-black w-fit"
                                onClick={() => updateSingleField('featureText', vaultTables.features)}
                            >Distinctive Feature</Button>
                        </motion.div>
                        <div className="text-center py-4 text-xl" style={{ fontFamily: newRocker.style.fontFamily }}>{vaultData.featureText}</div>
                    </div>
                </div>

                <div className="grid-area-[5/2/6/3] max-h-full w-full grid grid-cols-4 grid-rows-1 border-b border-white">
                    <div className="flex flex-col items-center p-4 overflow-auto flex-1 border-r border-white">
                        <motion.div whileTap={{ scale: 0.9 }}>
                            <Button 
                                variant="outline" 
                                className="font-extralight bg-black text-white border-white hover:bg-white hover:text-black w-fit"
                                onClick={() => updateSingleField('room1Text', vaultTables.rooms)}
                            >Room 1</Button>
                        </motion.div>
                        <div className="text-center py-4 text-xl" style={{ fontFamily: newRocker.style.fontFamily }}>{vaultData.room1Text}</div>
                    </div>
                    <div className="flex flex-col items-center p-4 overflow-auto flex-1 border-r border-white">
                        <motion.div whileTap={{ scale: 0.9 }}>
                            <Button 
                                variant="outline" 
                                className="font-extralight bg-black text-white border-white hover:bg-white hover:text-black w-fit"
                                onClick={() => updateSingleField('room2Text', vaultTables.rooms)}
                            >Room 2</Button>
                        </motion.div>
                        <div className="text-center py-4 text-xl" style={{ fontFamily: newRocker.style.fontFamily }}>{vaultData.room2Text}</div>
                    </div>
                    <div className="flex flex-col items-center p-4 overflow-auto flex-1 border-r border-white">
                        <motion.div whileTap={{ scale: 0.9 }}>
                            <Button 
                                variant="outline" 
                                className="font-extralight bg-black text-white border-white hover:bg-white hover:text-black w-fit"
                                onClick={() => updateSingleField('room3Text', vaultTables.rooms)}
                            >Room 3</Button>
                        </motion.div>
                        <div className="text-center py-4 text-xl" style={{ fontFamily: newRocker.style.fontFamily }}>{vaultData.room3Text}</div>
                    </div>
                    <div className="flex flex-col items-center p-4 overflow-auto flex-1">
                        <motion.div whileTap={{ scale: 0.9 }}>
                            <Button 
                                variant="outline" 
                                className="font-extralight bg-black text-white border-white hover:bg-white hover:text-black w-fit"
                                onClick={() => updateSingleField('room4Text', vaultTables.rooms)}
                            >Room 4</Button>
                        </motion.div>
                        <div className="text-center py-4 text-xl" style={{ fontFamily: newRocker.style.fontFamily }}>{vaultData.room4Text}</div>
                    </div>
                </div>
            </div>
            <div className="flex gap-4 mt-8 justify-center items-center">      
          <NavigationButtons 
            backPath="/game/rules//" 
            backLabel="Back"
            />
        </div>
        </div>
    );
}
 
export default Vault;