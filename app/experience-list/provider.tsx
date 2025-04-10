'use client';
import { ExperienceItemProps, ExperienceItemStatus } from '@/sharedTypes.type';
import moment, { Moment } from 'moment-jalaali';
import { createContext, useState } from 'react';

interface ExperienceListContextProps {
  onSelectDate: (value: Moment | null) => void;
  selectedDate: Moment | null;
  experienceList: {
    day: moment.Moment;
    list: ExperienceItemProps[];
  }[];
  onRemoveFilter: () => void;
}
export const ExperienceListContext = createContext<ExperienceListContextProps>({
  onSelectDate: () => {},
  selectedDate: null,
  experienceList: [],
  onRemoveFilter: () => {},
});

export const ExperienceListProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const today = moment();
  const mockExperiences = [...new Array(30)].map((_, index) => {
    return {
      day: today.clone().add(index, 'day'),
      list: [...new Array(10)].map((_, index) => {
        return {
          category: 'خلق',
          title: 'جواهرسازی، ساخت گردنبند',
          location: 'توحید',
          time: '15:00',
          price: '500 هزارتومان',
          status: (index % 3 === 0
            ? 'soldout'
            : 'active') as ExperienceItemStatus,
        };
      }),
    };
  });
  const [selectedDate, onSelectDate] = useState<Moment | null>(null);
  const handleOnSelectDate = (value: Moment | null) => {
    onSelectDate(value);
  };
  const onRemoveFilter = () => {
    onSelectDate(null);
  };

  return (
    <ExperienceListContext.Provider
      value={{
        selectedDate,
        onSelectDate: handleOnSelectDate,
        experienceList: mockExperiences,
        onRemoveFilter,
      }}
    >
      {children}
    </ExperienceListContext.Provider>
  );
};
