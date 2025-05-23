'use client';

import { useState } from 'react';

import { Check, ChevronDown, ChevronUp, Filter } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';

import { FilterOption, FilterValue } from '../types/prompt';

interface FilterDropdownProps {
  displayAtHomePage?: boolean;
  disabled: boolean;
  filter: FilterValue;
  filterOptions: FilterOption[];
  updateFilter: (value: FilterValue) => void;
}

export function FilterDropdown({
  displayAtHomePage = false,
  disabled,
  filter,
  filterOptions,
  updateFilter,
}: FilterDropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          disabled={disabled}
          variant={displayAtHomePage ? 'ghost' : 'outline'}
          role="combobox"
          aria-expanded={open}
          className={cn(
            displayAtHomePage
              ? 'px-1 pb-0 text-sm font-medium text-muted-foreground/80 hover:bg-transparent'
              : 'w-auto justify-between',
          )}
        >
          {
            filterOptions.find((filterOption) => filterOption.value === filter)
              ?.label
          }
          {displayAtHomePage ? (
            open ? (
              <ChevronUp size={13} />
            ) : (
              <ChevronDown size={13} />
            )
          ) : (
            <Filter className="opacity-50" />
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {filterOptions.map((filterOption) => (
                <CommandItem
                  key={filterOption.value}
                  value={filterOption.value}
                  onSelect={() => {
                    updateFilter(filterOption.value);
                    setOpen(false);
                  }}
                >
                  {filterOption.label}
                  <Check
                    className={cn(
                      'ml-auto',
                      filter === filterOption.value
                        ? 'opacity-100'
                        : 'opacity-0',
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
