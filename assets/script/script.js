  // dropdown
      // Array of state names and their abbreviations
      const states = [
        { name: "Alabama", abbreviation: "AL",beginnerPrice:"$85",standardPrice:"$285",professionalPrice:"$385" },
        { name: "Alaska", abbreviation: "AK",beginnerPrice:"$90",standardPrice:"$295",professionalPrice:"$399" },
        { name: "Arizona", abbreviation: "AZ",beginnerPrice:"$95",standardPrice:"$265",professionalPrice:"$380" },
        { name: "Arkansas", abbreviation: "AR",beginnerPrice:"$100",standardPrice:"$285",professionalPrice:"$385" },
        { name: "California", abbreviation: "CA",beginnerPrice:"$105",standardPrice:"$290",professionalPrice:"$345" },
        { name: "Colorado", abbreviation: "CO",beginnerPrice:"$110",standardPrice:"$295",professionalPrice:"$360" },
        { name: "Connecticut", abbreviation: "CT",beginnerPrice:"$115",standardPrice:"$345",professionalPrice:"$375" },
        { name: "Delaware", abbreviation: "DE",beginnerPrice:"$120",standardPrice:"$385",professionalPrice:"$347" },
        { name: "Florida", abbreviation: "FL",beginnerPrice:"$125",standardPrice:"$245",professionalPrice:"$367" },
        { name: "Georgia", abbreviation: "GA",beginnerPrice:"$130",standardPrice:"$365",professionalPrice:"$388" },
        { name: "Hawaii", abbreviation: "HI",beginnerPrice:"$135",standardPrice:"$185",professionalPrice:"$345" },
        { name: "Idaho", abbreviation: "ID",beginnerPrice:"$140",standardPrice:"$235",professionalPrice:"$334" },
        { name: "Illinois", abbreviation: "IL",beginnerPrice:"$145",standardPrice:"$265",professionalPrice:"$367" },
        { name: "Indiana", abbreviation: "IN",beginnerPrice:"$150",standardPrice:"$275",professionalPrice:"$399" },
        { name: "Iowa", abbreviation: "IA",beginnerPrice:"$155",standardPrice:"$284",professionalPrice:"$455" },
        { name: "Kansas", abbreviation: "KS",beginnerPrice:"$160",standardPrice:"$235",professionalPrice:"$499" },
        { name: "Kentucky", abbreviation: "KY",beginnerPrice:"$165",standardPrice:"$355",professionalPrice:"$550" },
        { name: "Louisiana", abbreviation: "LA",beginnerPrice:"$170",standardPrice:"$285",professionalPrice:"$335" },
        { name: "Maine", abbreviation: "ME",beginnerPrice:"$175",standardPrice:"$235",professionalPrice:"$343" },
        { name: "Maryland", abbreviation: "MD",beginnerPrice:"$180",standardPrice:"$245",professionalPrice:"$323" },
        { name: "Massachusetts", abbreviation: "MA",beginnerPrice:"$185",standardPrice:"$255",professionalPrice:"$344" },
        { name: "Michigan", abbreviation: "MI",beginnerPrice:"$190",standardPrice:"$255",professionalPrice:"$365" },
        { name: "Minnesota", abbreviation: "MN",beginnerPrice:"$80",standardPrice:"$265",professionalPrice:"$375" },
        { name: "Mississippi", abbreviation: "MS",beginnerPrice:"$85",standardPrice:"$175",professionalPrice:"$287" },
        { name: "Missouri", abbreviation: "MO",beginnerPrice:"$90",standardPrice:"$215",professionalPrice:"$388" },
        { name: "Montana", abbreviation: "MT",beginnerPrice:"$95",standardPrice:"$139",professionalPrice:"$299" },
        { name: "Nebraska", abbreviation: "NE",beginnerPrice:"$100",standardPrice:"$235",professionalPrice:"$345" },
        { name: "Nevada", abbreviation: "NV",beginnerPrice:"$105",standardPrice:"$255",professionalPrice:"$334" },
        { name: "New Hampshire", abbreviation: "NH",beginnerPrice:"$130",standardPrice:"$275",professionalPrice:"$376" },
        { name: "New Jersey", abbreviation: "NJ",beginnerPrice:"$135",standardPrice:"$245",professionalPrice:"$375" },
        { name: "New Mexico", abbreviation: "NM",beginnerPrice:"$120",standardPrice:"$256",professionalPrice:"$336" },
        { name: "New York", abbreviation: "NY",beginnerPrice:"$125",standardPrice:"$275",professionalPrice:"$375"},
        { name: "North Carolina", abbreviation: "NC",beginnerPrice:"$130",standardPrice:"$283",professionalPrice:"$376" },
        { name: "North Dakota", abbreviation: "ND",beginnerPrice:"$85",standardPrice:"$235",professionalPrice:"$375" },
        { name: "Ohio", abbreviation: "OH",beginnerPrice:"$105",standardPrice:"$245",professionalPrice:"$334" },
        { name: "Oklahoma", abbreviation: "OK",beginnerPrice:"$110",standardPrice:"$255",professionalPrice:"$375" },
        { name: "Oregon", abbreviation: "OR",beginnerPrice:"$95",standardPrice:"$245",professionalPrice:"$399" },
        { name: "Pennsylvania", abbreviation: "PA",beginnerPrice:"$80",standardPrice:"$235",professionalPrice:"$354" },
        { name: "Rhode Island", abbreviation: "RI",beginnerPrice:"$85",standardPrice:"$245",professionalPrice:"$366" },
        { name: "South Carolina", abbreviation: "SC",beginnerPrice:"$100",standardPrice:"$255",professionalPrice:"$377" },
        { name: "South Dakota", abbreviation: "SD",beginnerPrice:"$90",standardPrice:"$265",professionalPrice:"$388" },
        { name: "Tennessee", abbreviation: "TN",beginnerPrice:"$100",standardPrice:"$295",professionalPrice:"$322" },
        { name: "Texas", abbreviation: "TX",beginnerPrice:"$80",standardPrice:"$278",professionalPrice:"$333" },
        { name: "Utah", abbreviation: "UT",beginnerPrice:"$85",standardPrice:"$256",professionalPrice:"$344" },
        { name: "Vermont", abbreviation: "VT",beginnerPrice:"$96",standardPrice:"$275",professionalPrice:"$355" },
        { name: "Virginia", abbreviation: "VA",beginnerPrice:"$95",standardPrice:"$254",professionalPrice:"$365" },
        { name: "Washington", abbreviation: "WA",beginnerPrice:"$100",standardPrice:"$234",professionalPrice:"$356" },
        { name: "West Virginia", abbreviation: "WV",beginnerPrice:"$135",standardPrice:"$276",professionalPrice:"$375" },
        { name: "Wisconsin", abbreviation: "WI",beginnerPrice:"$130",standardPrice:"$234",professionalPrice:"$375" },
        { name: "Wyoming", abbreviation: "WY",beginnerPrice:"$110",standardPrice:"$275",professionalPrice:"$3856" },
      ]

      const dropdown = document.getElementById('stateDropdown');
      const dropdown2 = document.getElementById('stateDropdown2');
      const beginnerPrice = document.getElementById('beginnerPrice');
      const standardPrice = document.getElementById('standardPrice');
      const professionalPrice = document.getElementById('professionalPrice');
    
      // Loop through the states array and create an option element for each state
      states.forEach(state => {
        const option = document.createElement('option');
        option.value = state.abbreviation;
        option.textContent = state.name;
        dropdown.appendChild(option);
      });
      states.forEach(state => {
        const option2 = document.createElement('option');
        option2.value = state.abbreviation;
        option2.textContent = state.name;
        dropdown2.appendChild(option2);
      });
    
      // Event listener for dropdown change
      dropdown.addEventListener('change', function() {
        const selectedState = this.value;
        // Find the state in the array
        const state = states.find(s => s.abbreviation === selectedState);
        if (state) {
          beginnerPrice.textContent = state.beginnerPrice;
          standardPrice.textContent = state.standardPrice;
          professionalPrice.textContent = state.professionalPrice;
        } else {
          beginnerPrice.textContent = '$0';
          standardPrice.textContent = '$0';
          professionalPrice.textContent = "$0";
        }
      });
